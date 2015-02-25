#!/usr/bin/env node

var fs=require('fs');

var DocUtils, DocxGen, PptxGen, content,  doc, fileExts, genClass,  output, zip;

stdio = require('stdio');
DocxGen = require('docxtemplater');
DocUtils = DocxGen.DocUtils;
PptxGen = DocxGen.PptxGen;

extsToGen = { "docx":DocxGen, "pptx":PptxGen };
type="docx";

GenClass = extsToGen[type];

jsonInput={};

stdio.read(function(text){
    doc = new GenClass(text);
    doc.load(text,{});
    doc.setData(jsonInput);
    doc.render();
    zip = doc.getZip();
    output = zip.generate({
      type: "string"
    });
    console.log(output);
});
