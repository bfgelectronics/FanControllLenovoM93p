#Fan speed controller for the lenovo M93p tiny PC

#Why?
I use a lenovo m93p tiny as my homeserver and i want to make it as silent as possible without hurting the long time reliability of the machine, so i upgraded the stock cooling system to an Noctua NH-L9i chromax and now i am doing this piece of software to customise the behaviour of the cooling fan.

#Thinks you need to do before
Follow the instructions from this comment.
https://www.reddit.com/r/homelab/comments/if9dkq/comment/g4t9wq3/?utm_source=share&utm_medium=web2x&context=3

In case you cannot acces it:

```
Quick and dirty:

Add the following to your /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT="quiet acpi_enforce_resources=lax"
than update grub

root# update-grub
reboot

add module (must be done after every reboot), can be automated with crontab "@reboot"

/sbin/modprobe it87 force_id=0x8733
now you should see the following directories

/sys/class/hwmon/hwmon0
/sys/class/hwmon/hwmon1
/sys/class/hwmon/hwmon2
in one of them you will find a file called

pwm1_enable
if I'm not mistaken than 1 = low RPM and 2 = default RPM

echo "1" > /sys/class/hwmon/hwmon<0-2>/pwm1_enable
This should be it.
```
