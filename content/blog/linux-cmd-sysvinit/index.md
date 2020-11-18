---
title: 'Linux 命令 - SysVinit'
date: '2019-08-03T02:03:41+08:00'
status: publish
permalink: /service-commands-on-sysvinit
author: admin
excerpt: ''
type: post
id: 667
category:
    - Linux
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
---

SysVinit是传统的init系统的母亲，它是内核启动并保持**PID 1**的第一个进程。所有服务都可在“/etc/init.d/”文件夹中找到。如果要启动，停止，重新启动，启用，重新加载和服务状态，请按照以下命令执行此操作。确保您具有**root**或**sudo**权限以运行以下命令。 <br>
这里我介绍了所有的服务命令，如Apache，MySQL，MariaDB，Bind（Named，Bind9），Nginx，Lighttpd，Exim，Postfix，Sendmail，Qmail等.

我们可以使用两种不同的方式来交互Linux中的服务<br>
`service \[daemon\] \[usage\] `or `/etc/init.d/\[daemon\] \[usage\]`

<table class=""><tbody><tr><td>Apache (DEP Systems)</td><td>**Usage :** \[start | stop | graceful-stop | restart | reload | force-reload | start-htcacheclean | stop-htcacheclean\]  
**command :** service apache2 \[usage\]</td></tr><tr><td>Apache (RPM Systems)</td><td>**Usage :** \[start | stop | graceful-stop | restart | reload | force-reload | start-htcacheclean | stop-htcacheclean\]  
**command :** service httpd \[usage\]</td></tr><tr><td>MySQL</td><td>**Usage :** \[start | stop | restart | reload | force-reload | status  
**command :** service mysql \[usage\]</td></tr><tr><td>MariaDB</td><td>**Usage :** \[start | stop | restart | reload | force-reload | status\]  
**command :** service mysql \[usage\]</td></tr><tr><td>Network (DEB Systems)</td><td>**Usage :** \[start | stop | status | restart | reload | force-reload\]  
**command :** service networking \[usage\]**or** service network-manager \[usage\]</td></tr><tr><td>Network (RPM Systems)</td><td>**Usage :** \[start | stop | status | restart | reload | force-reload\]  
**command :** service network \[usage\]</td></tr><tr><td>OpenSSH (DEB Systems)</td><td>**Usage :** \[start | stop | restart | reload | force-reload | condrestart | try-restart | status\]  
**command :** service ssh \[usage\]</td></tr><tr><td>openSSH (RPM systems)</td><td>**Usage :** \[start | stop | restart | reload | force-reload | condrestart | try-restart | status\]  
**command :** service sshd \[usage\]</td></tr><tr><td>cPanel (Hosting Control Panel)</td><td>**Usage :** \[start | stop | restart | status\]  
**command :** service cpanel \[usage\]</td></tr><tr><td>PureFTPd</td><td>**Usage :** \[start | stop | restart | force-reload | status\]  
**command :** service pure-ftpd \[usage\]</td></tr><tr><td>ProFTPD</td><td>**Usage :** \[start | stop | restart | force-reload | status\]  
**command :** service proftpd \[usage\]</td></tr><tr><td>VSFTPD</td><td>**Usage :** \[start | stop | restart | reload | status\]  
**command :** service vsftpd \[usage\]</td></tr><tr><td>Exim (Mail Service)</td><td>**Usage :** \[start | stop | restart | reload | status\]  
**command :** service exim \[usage\]</td></tr><tr><td>Dovecot IMA</td><td>**Usage :** \[condrestart | try-restart | start | stop | restart | reload | force-reload | status\]  
**command :** service dovecot \[usage\]</td></tr><tr><td>Send Mail</td><td>**Usage :** \[start | stop | restart | reload | status\]  
**command :** service sendmail \[usage\]</td></tr><tr><td>Lighttpd</td><td>**Usage :** \[start | stop | restart | reload | status\]  
**command :** service lighttpd \[usage\]</td></tr><tr><td>Nginx</td><td>**Usage :** \[start | stop | restart | reload | status | configtest\]  
**command :** service nginx \[usage\]</td></tr><tr><td>BIND DNS (DEB Systems)</td><td>**Usage :** \[start | stop | status | restart | try-restart | reload | force-reload\]  
**command :** service bind9 \[usage\]</td></tr><tr><td>BIND DNS (RPM Systems)</td><td>**Usage :** \[start | stop | status | restart | try-restart | reload | force-reload\]  
**command :** service named \[usage\]</td></tr><tr><td>ISCSI</td><td>**Usage :** \[start | stop | status | restart | condrestart | try-restart | reload | force-reload\]  
**command :** service iscsi \[usage\]</td></tr><tr><td>CSF</td><td>**Usage :** \[start | stop | restart | force-reload | status\]  
**command :** service csf \[usage\]</td></tr><tr><td>LFD</td><td>**Usage :** \[start | stop | restart | force-reload | status\]  
**command :** service lfd \[usage\]</td></tr><tr><td>NSCD</td><td>**Usage :** \[start | stop | status | restart | reload | condrestart\]  
**command :** service nscd \[usage\]</td></tr><tr><td>FastMail</td><td>**Usage :** \[start | stop | status | restart\]  
**command :** service fastmail \[usage\]</td></tr><tr><td>postfix</td><td>**Usage :** \[start | stop | restart | reload | status\]  
**command :** service postfix \[usage\]</td></tr><tr><td>iptables</td><td>**Usage :** \[start | stop | restart | condrestart | status | save | panic\]  
**command :** service iptables \[usage\]</td></tr><tr><td>qmail</td><td>**Usage :** \[start | stop | restart | reload | status | condrestart\]  
**command :** service qmail \[usage\] **or** /etc/init.d/qmail \[usage\]</td></tr><tr><td>apf</td><td>**Usage :** \[start | stop | restart\]  
**command :** service apf \[usage\] **or** /etc/init.d/apf \[usage\]</td></tr><tr><td>cron</td><td>**Usage :** \[start | stop | restart | reload | status | condrestart\]  
**command :** service cron \[usage\] **or** /etc/init.d/cron \[usage\]</td></tr><tr><td>syslog</td><td>**Usage :** \[start | stop | restart | status | condrestart\]  
**command :** service syslog \[usage\] **or** /etc/init.d/syslog \[usage\]</td></tr><tr><td>TIDAL Agent</td><td>**Usage :** \[start | stop | status\]  
**command :** \[your path\] tagent \[usage\]</td></tr><tr><td>Oracle ASM</td><td>**Usage :** \[start | stop | restart | enable | disable | configure | createdisk | deletedisk | querydisk | listdisks | scandisks | status\]  
**command :** service oracleasm \[usage\] **or** /etc/init.d/oracleasm \[usage\]</td></tr></tbody></table>