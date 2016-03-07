#!/bin/bash

BASE="/Users/fmz/www/nodejs/f.staging/static"
echo "BASE=$BASE"
cd $BASE

grunt devbcweb
#grunt bcweb
VERSION="v20160307"
#VERSION=`date +v%Y%m%d`
SRC_DIR=$BASE/dist
DIST_DIR=$BASE/$VERSION/dist

# 创建版本目录
if [ ! -d $DIST_DIR ]
then 
	mkdir -p $DIST_DIR
else
	echo "\n rm old files(js css)..."
	rm -rf $DIST_DIR/js
	rm -rf $DIST_DIR/css
	ls -l $DIST_DIR
fi

echo "\n cp new files(js css)..."
cp -R $SRC_DIR/js $DIST_DIR/js
cp -R $SRC_DIR/css $DIST_DIR/css
ls -l $DIST_DIR

# 版本图片目录
if [ ! -d $DIST_DIR/img ]
then
	mkdir $DIST_DIR/img
fi
cp -R $BASE/img/* $DIST_DIR/img/