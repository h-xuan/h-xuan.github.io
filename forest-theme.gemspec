# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "forest-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["hi"]
  spec.email         = ["huanxuan_oh@mymail.sutd.edu.sg"]

  spec.summary       = %q{A short description of my theme}
  spec.homepage      = "http://127.0.0.1:4000"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
