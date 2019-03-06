module.exports = {
  "reporters": [
    "default",
    [
      "jest-junit",
      {
        usePathForSuiteName: "true",
        classNameTemplate: "[{classname}]",
        titleTemplate: "{title}",
        outputDirectory: "test-results/jest",
        outputName: "./report.xml"
      }
    ]
  ],
  roots: [
    "packages/"
  ]
};