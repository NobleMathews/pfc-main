from pydrive2.auth import GoogleAuth
from pydrive2.drive import GoogleDrive
import pandas as pd
import json

gauth = GoogleAuth()
gauth.LocalWebserverAuth()

drive = GoogleDrive(gauth)


def list_folder(parent):
    filelist = []
    file_list_main = drive.ListFile({'q': "'%s' in parents and trashed=false" % parent}).GetList()
    for file in file_list_main:
        if file['mimeType'] == 'application/vnd.google-apps.folder':  # if folder
            filelist.append({"id": file['id'], "title": file['title'], "link": file['alternateLink']})
    return filelist


master = {}
album_list = list_folder('1uS1a21vy39ObO7RnrZyariRbIYNCLQcU')
for folder1 in album_list:
    imgList = []
    file_list = drive.ListFile({'q': "'{}' in parents and trashed=false".format(folder1['id'])}).GetList()
    if not len(file_list) > 0:
        continue
    for f in file_list:
        imgList.append({"id": f['id'], "Filename": f['title'], "Direct Link": f['webContentLink'],
                        "Thumbnail Link": f['thumbnailLink'], "width": f['imageMediaMetadata']['width'],
                        "height": f['imageMediaMetadata']['height'], "embedLink": f["embedLink"]})
    targetvalue = [item for item in imgList if item.get('Filename').split(".")[0].lower() == "preview"]
    if not len(targetvalue) > 0:
        previewImg = imgList[0]
    else:
        previewImg = targetvalue[0]
    #     imgList.insert(0, imgList.pop(imgList.index(targetvalue[0])))
    master[folder1['title']] = {"id": folder1['id'], "Preview": previewImg, "Folder Link": folder1['link'], "Data": imgList}

with open('../src/assets/data/data.json', 'w', encoding='utf-8') as f:
    json.dump(master, f, sort_keys=False)

# df = pd.DataFrame(imgList)
# df.to_csv("../public/out.csv", index=False, header=True)
