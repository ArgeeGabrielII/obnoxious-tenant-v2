serve:
	npm start

build:
	docker build -t obnoxious-tenant:$(shell git rev-parse HEAD) .

local: build
	docker stop obnoxious-tenant-container
	docker rm obnoxious-tenant-container
	docker run --name obnoxious-tenant-container -d -p 8080:80 obnoxious-tenant 

gcp_config:
	gcloud config set project crested-display-322005

image:
	docker build -t obnoxious-tenant:$(shell git rev-parse HEAD) .
	docker tag obnoxious-tenant:$(shell git rev-parse HEAD) asia.gcr.io/crested-display-322005/masashi-yamamoto/obnoxious-tenant/obnoxious-tenant:$(shell git rev-parse HEAD)

image_push: image
	docker push asia.gcr.io/crested-display-322005/masashi-yamamoto/obnoxious-tenant/obnoxious-tenant:$(shell git rev-parse HEAD)

# install: 
# 	kubectx gke_crested-display-322005_asia-east1-a_masashi-cluster
# 	# kubectl get deployment partners-bucket-graphql-apollo -o yaml > ../yamlBackUp/stg/stg-backup-deployment.yaml
# 	# helm delete --purge obnoxious-tenant
# 	helm install ../deployment --name obnoxious-tenant -f ~/masashi.yaml.yaml --set ObnoxiousTenant.tag=$(shell git rev-parse HEAD)