# Express framework development template

> Back-end development template for Express framework
>
> Follow the RESTful API style

[中文项目说明](./README.md)

## Project Functions

- [x] mongoDB integration
- [x] passportJS integration, user login verification
- [x] bcryptJS integration, password encryption
- [x] Routing integration
- [x] Middleware templates
- [x] Local simple Mock data
- [x] response unified pipeline
- [x] express-validator integration to validate request data
- [x] session cache
  
### Directory Structure

```text
|-src
    |-db                                    # Database Script
        |-mongoose                          # Mongoose related Scripts
    |-mock                                  # Local Mock Data Script
    |-routes                                # Route Script Dir
    |-strategies                            # Strategy Script Dir of PassportJS
    |-utils                                 # Tool Script Dir
        |-middlewares                       # Middleware Script Dir
        |-helper.mjs                        # BcryptJS Tool Script
        |-response.mjs                      # Response Unit processing Pipeline Script
        |-validation-schemas.mjs            # express-validator processing Template Script
    |-create-app.mjs                        # process the express app pipeline Script
    |-index.mjs                             # Entry Script
|-.gitignore                                # git ignore
|-package.json                              # Project Config
|-README_EN.md                              # English Project Description
|-README.md                                 # Chinese Project Description

```
