module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/sylvan18/3590cf9521394c3982128e85d49f6c4e?v=22072bd1113845f0b1355b19bd2124fd"
               
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/sylvan18/5774def63dba4af087b726d7126fc4fa?v=5eba4c35d69c43d49c81758d69ec9d61"
            }
        }
    ],
}
