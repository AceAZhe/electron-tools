import win32api
import sys
import json
import time
import datetime
import os


value = sys.argv[1]
arr = json.loads(value)
params=arr[0]

def openApp():
    win32api.ShellExecute(0, 'open', params['path'], '', '', 1)
    time.sleep(params['interval'])
    os.system('taskkill /f /im '+params['name'])
    

if __name__ == "__main__":
    currentTime=int((time.time())*1000)
    while True:
        currentTime=int((time.time())*1000)
        if (currentTime < params['deadline']):        
            openApp()
            currentTime=int((time.time())*1000)
        else:
            print(json.dumps({
                "msg": "执行完了",
                "code":0
            }))
            break