#!/bin/bash

set -ex

PACKAGE=github.com/jteeuwen/go-bindata/go-bindata

go get -u $PACKAGE

for PLATFORM in linux darwin; do
  GOOS=$PLATFORM GOARCH=amd64 go build -o vendor/go-bindata-$PLATFORM $PACKAGE
done
