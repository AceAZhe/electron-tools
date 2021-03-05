import time


currentTime = int((time.time()) * 1000)
currentTimeD = currentTime + 30 * 1000

while True:
    currentTime=int((time.time())*1000)
    if (currentTime < currentTimeD):        
       print("ing")
       print(currentTime < currentTimeD)
       time.sleep(0.5)
       currentTime=int((time.time())*1000)
    else:
        print("ok")
        print(currentTimeD)
        print(currentTime)
        break