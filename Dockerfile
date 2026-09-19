FROM meteor/meteor-base AS base
ENV PATH="${PATH}:/home/mt/.meteor"
USER mt
RUN curl https://install.meteor.com/\?release\=2.12 | sh
COPY --chown=mt ./app /home/mt/DiceCloud
RUN cd /home/mt/DiceCloud
RUN meteor npm install

FROM meteor/meteor-base AS runner
USER root
RUN apt-get update --quiet
RUN apt-get install libarchive-tools --quiet --yes
RUN ln --symbolic --force $(which bsdtar) $(which tar)
USER mt
ENV PATH="${PATH}:/home/mt/.meteor"
COPY --chown=mt --from=base /home/mt/.meteor /home/mt/.meteor
COPY --chown=mt --from=base /home/mt/DiceCloud /home/mt/DiceCloud
WORKDIR /home/mt/DiceCloud
CMD meteor
