serve:
	npm start

build:
	npm run build
	npm run docker:build

local: build
	docker stop obnoxious-tenant-container
	docker rm obnoxious-tenant-container
	npm run docker:run

gcp_config:
	gcloud config set project crested-display-322005
	gcloud container clusters get-credentials masashi-cluster --zone asia-east1-a --project crested-display-322005

image: build gcp_config
	docker tag obnoxious-tenant:latest asia.gcr.io/crested-display-322005/masashi-yamamoto/obnoxious-tenant/obnoxious-tenant:$(shell git rev-parse HEAD)

image_push: image
	docker push asia.gcr.io/crested-display-322005/masashi-yamamoto/obnoxious-tenant/obnoxious-tenant:$(shell git rev-parse HEAD)
