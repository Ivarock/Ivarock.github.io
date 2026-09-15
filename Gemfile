source "https://rubygems.org"

# Este Gemfile es solo para poder previsualizar el sitio en tu
# computadora con `bundle exec jekyll serve`. GitHub Pages construye
# el sitio automáticamente en sus servidores, así que NO necesitas
# este archivo para publicar; solo es útil para pruebas locales.

gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows y JRuby no incluyen zoneinfo por defecto
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
