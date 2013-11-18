describe("Decoder", function() {
  it("decodes an encrypted string from the URL", function()) {
    decoder.getCypher = function() { decoder.cypher = CryptoJS.AES.encrypt("a test string", "password"); };
    decoder.getPassword    = function() { decoder.password = "password"; };
    expect(decoder.protect()).toEqual("a test string");
  });
});
