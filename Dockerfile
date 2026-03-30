FROM php:8.2-apache
# Copia apenas o conteúdo da pasta dist para a pasta pública do servidor
COPY ./dist /var/www/html/
RUN chown -R www-data:www-data /var/www/html