describe("Decoder", function() {
  it("decodes an encrypted string from the URL", function()) {
    decoder.getCypher = function() { decoder.cypher = CryptoJS.AES.encrypt("a test string", "password"); };
    decoder.getPassword    = function() { decoder.password = "password"; };
    expect(decoder.decrypt()).toEqual("a test string");
  });
});
