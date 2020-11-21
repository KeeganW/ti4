FROM python:3-alpine

RUN mkdir /ti4-generator

# Copy over and install requirements to create the base layer for this server
COPY requirements.txt /ti4-generator

WORKDIR /ti4-generator

RUN python3 -m pip install -r requirements.txt --no-cache-dir

# Copy over the rest of the service, so config changes don't require re-running installs
COPY . /ti4-generator

EXPOSE 80

CMD ["python", "ti4_web.py"]
