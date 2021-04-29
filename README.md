# Bookworm

Thi project is currently a POC and comes from my time over the last year in SRE and infrastructure where we store everything as code. Working in a large company from tools, development environments and HR systems there are literally thousands of URLs to remember.

At the moment if you don't know a URL you have to ask in Slack. I wanted a way everyone in the company could contribute, share and centralize all these URLs, having a consistent experience and taxonomy.

I miss [del.icio.us](https://en.wikipedia.org/wiki/Delicious_(website)) and I've not found anything I like to replace it, everything also needs an account but your bookmarks in Chrome can already be sync to your account. So my thought was what about using Git as the repository for shared bookmarks.

This Repo is to centralize and share Chrome bookmarks and generate `HTML` you can import into Chrome.

### Future

This is currently just a POC, the next step is to turn it into either a web service or a `npx` where you can point to different peoples `YAML` bookmarks and load them into Bookworm spitting out a HTML file you can use.

People would check in their YAML files into their own git repos, then using the RAW view Bookworm can process them. You could string multiple together and collect metrics about popular config (if there is a web service).


## Updating bookmarks

All bookmarks are stored withing `./src/config/bookmarks.yaml`, you can add folders or URLs as you please following this schema.

```YAML
folders:
  - label: folder 1
    folders:
      - label: sub folder 1
        bookmarks:
          - label: sample url 1
            href: https://www.mywebsite.com
  - label: folder 2
    folders:
      - label: sub folder 2
        bookmarks:
          - label: sample url 2
            href: https://www.mysecondwebsite.com
          - label: sample url 3
            href: https://www.mythirdwebsite.com
```

## Generating bookmarks HTML

There is a simple node script that will turn this `YAML` into a `HTML` file you can import into chrome. To generate the file you need [Node](https://nodejs.org/en/) to run the script, then you can run the following:

```Bash
$ nvm use
$ yarn
$ yarn start
```

This will then produce `bookmarks.html`.

## Importing bookmarks

You can import Bookworm into Chrome following the standard action: [https://support.google.com/chrome/answer/96816?hl=en-GB](https://support.google.com/chrome/answer/96816?hl=en-GB). You want to import the file in this repo `bookmarks.html`.


You will then find your bookmarks under:

```

Bookmarks Bar/
├── Bookworm/
│   ├── folder 1/
│       ├──...
│   ├── .../
├──...
```

`Bookworm` will contain all the shared bookmarks, if you want to change the folder name you can do so in `YMAL`:

```YAML
label: Bookworm
```


This is a shared repo you might want to regularly delete the `Bookworm` folder and update it. You can do this, then `git pull` this repo, rerun the generator and import the bookmarks again.

## Exporting bookmarks

TODO - a way to convert exported bookmarks into YAML.

## Testing

TODO
Fix markup folder header depth