module.exports = {
    default: {
        require: [
            'src/steps/*.ts',
            'src/hooks/*.ts',
            'src/support/*.ts'
        ],
        requireModule: ['ts-node/register'],
        format: [
            'progress',
            'json:reports/report.json',
            'html:reports/report.html'
        ],
        paths: ['features/*.feature']
    }
}