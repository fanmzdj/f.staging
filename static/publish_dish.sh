#!/bin/bash

BASE="/Users/fmz/www/home/bcw/static"
echo "BASE=$BASE"
cd $BASE

grunt devbcweb
#grunt bcweb
VERSION="v20160125"
#VERSION=`date +v%Y%m%d`
SRC_DIR=$BASE/dist
DIST_DIR=$BASE/$VERSION/dist

echo "\n rm old files(js css)..."
rm -rf $DIST_DIR/js
rm -rf $DIST_DIR/css
ls -l $DIST_DIR

echo "\n cp new files(js css)..."
cp -R $SRC_DIR/js $DIST_DIR/js
cp -R $SRC_DIR/css $DIST_DIR/css
ls -l $DIST_DIR
