module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/mocks/setupTests.js"],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.svg$": "<rootDir>/mocks/svgTransform.cjs",
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4K|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/imagesTransform.cjs",
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};