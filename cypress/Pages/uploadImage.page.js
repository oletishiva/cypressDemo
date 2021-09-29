
var DesignEditorUploadImagePage = {

    attachfile: function(filenamepath) {
        return cy.get('input[type="file"]',{ timeout: 20000 }).attachFile(filenamepath)
        
    },
    click_Label:function(labelName)
    {
      return  cy.contains(labelName).click({ force: true });
    },
    click_upload_buton:function(){
       return  cy.get('[data-cy=modal-upload-button]').click()
    }
    
};

export default DesignEditorUploadImagePage;