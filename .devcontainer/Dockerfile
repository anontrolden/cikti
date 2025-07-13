FROM debian:12

ENV LANG="en_US.UTF-8"
ENV LANGUAGE="en_US.UTF-8"
ENV LC_ALL="en_US.UTF-8"

RUN apt update 
RUN apt install -y locales
RUN sed -i  's/# en_US.UTF-8/en_US.UTF-8/' /etc/locale.gen && \
    locale-gen

RUN apt install -y apt-file git && \
    apt-file update

RUN apt install -y python3-pip

RUN apt install -y curl && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash && \
    . "$HOME/.nvm/nvm.sh" && nvm install 22

RUN apt install -y vim procps