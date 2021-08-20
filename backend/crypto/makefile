deploy:
	gcloud config set project crested-display-322005
	gcloud functions deploy crypto --runtime nodejs14 --trigger-http --allow-unauthenticated --region asia-east2 --env-vars-file .env.yaml