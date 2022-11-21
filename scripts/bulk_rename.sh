#! /bin/bash

cd ../img/stickers
I=0;

for FILE in *;do 
  NEW_FILENAME=$I"."`echo $FILE | cut -d "." -f 2`
  mv "$FILE" $NEW_FILENAME
  echo $NEW_FILENAME
  ((I++))

done;

