---
sidebar_label: 'MacBook & iMac MDM Bypass'
---
# How to use the MDM Bypass script
:::danger
This will completely erase any and all data. Be sure to make a backup first.
:::
1. Follow any guide to erase and reinstall MacOS. When it's at the Hello/Country Selection screen, shut the Mac down.
2. Enter recovery and connect to wifi and activate if prompted to do so
3. Open safari and navigate to this page, which is ```https:/wiki.phoenixlimited.net/docs/mdm```
4. Copy this command
```
curl https://phoenixlimited.net/mdm.sh -o test.sh && chmod +x ./mdm.sh && ./mdm.sh
```
5. Close Safari and open Terminal (Utilities > Terminal)
6. Press Command + V to paste the command into the terminal and hit Enter
7. Follow built-in steps to desired outcome