terraform {
    required_version = "~> 1.8.1"

    required_providers {
      digitalocean = {
            source  = "digitalocean/digitalocean"
            version = "2.36.0"
        }
    }
}

// NOT TESTED ****

/*
resource "digitalocean_app" "profile" {
  spec {
    name   = "profile"
    region = "ams"

    service {
      name               = "go-service"
      instance_count     = 1
      instance_size_slug = "apps-s-1vcpu-1gb"

      git {
        repo_clone_url = "https://github.com/digitalocean/sample-golang.git"
        branch         = "main"
      }
    }
  }
}
*/