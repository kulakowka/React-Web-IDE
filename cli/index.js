var klaw = require('klaw')
var { parse } = require('path')
var { statSync } = require('fs')

getFilesList('src/', files => {
  const state = {
    files: {
      byPath: getFilesByPath(files),
      tree: getFilesTree(files)
    }
  }
  console.dir(state, {depth: null, colors: true})
  console.log(JSON.stringify(state, null, 2))
})

function getFilesTree (files) {

}

function getFilesByPath (files) {
  return files.reduce((filesByPath, path) => {
    const data = parse(path)
    const stats = statSync(path)
    path = path.replace('/Users/a-kulakov/Projects/folder-actions/src', '')
    if (path === '') return filesByPath
    filesByPath[path] = {
      type: stats.isDirectory() ? 'folder' : 'file',
      dir: data.dir,
      path: path,
      filename: data.base,
      ext: data.ext,
      name: data.name
    }

    return filesByPath
  }, {})
}

function getFilesList (dir, done) {
  var items = [] // files, directories, symlinks, etc
  klaw(dir)
    .on('data', function (item) {
      items.push(item.path)
    })
    .on('end', function () {
      console.dir(items) // => [ ... array of files]
      done(items)
    })
}
