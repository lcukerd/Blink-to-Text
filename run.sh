#!/bin/bash
echo "Blink to Text app starting"
./blink_to_text &
cd resources/app/pycalcdist/detect_blink/
./detect_blink