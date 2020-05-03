<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:x="https://www.artiigo.com"
                xmlns:wb="http://www.worldbank.org"
                exclude-result-prefixes="x wb">
    <xsl:output method="html"/>

    <xsl:decimal-format decimal-separator="," grouping-separator="." />
    <xsl:variable name="decimal-format">#.###</xsl:variable>
    

    <xsl:template match="/">
       <h2 class="country-title">
            <xsl:value-of select="/wb:data/wb:data/wb:country"/>
        </h2>
        <table class="table table-bordered table-striped mb-0" id="data-table">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <xsl:for-each select="/wb:data/wb:data">
                    <tr>
                        <td>
                            <xsl:value-of select="wb:date"/>
                        </td>
                        <td>
                            <xsl:value-of select="format-number(number(wb:value),$decimal-format)"/>
                        </td>
                    </tr>
                </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>
</xsl:stylesheet>