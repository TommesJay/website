#!/bin/sh

# rsync compiled website to web server.

rsync -rv -e 'ssh -p 2020' --exclude '.git*' --exclude '_drf' --exclude 'source' . fsesser@c2.cosetrain.com:accurate-website.lnk/
