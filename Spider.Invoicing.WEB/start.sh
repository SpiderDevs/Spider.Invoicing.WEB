#!/bin/bash
docker stop spider-invoicing-web || true && docker rm -f spider-invoicing-web || true
docker run -d --name spider-invoicing-web -p 4200:4200 --restart always spider-invoicing-web