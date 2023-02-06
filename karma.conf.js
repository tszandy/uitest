module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['qunit'],
    // frameworks: ['requirejs', 'qunit'],
    files: [
      '*.js',
      'test/*.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
