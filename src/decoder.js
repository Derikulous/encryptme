<script>
var decoder = {
  getCypher: function() {
    this.cypher = document.URL.slice(window.location.toString().indexOf("?")+1)
  },
  getPassword: function() {
    this.password = prompt("Enter a password.")
    console.log(this.password)
          // A user types in a password
          // Then clicks lock down.
        },
        setUrl: function() {
          this.url = decoder.decrypt()
          alert(this.url)
          // A URL is given in the dialog box
        },
        decrypt: function() {
          cypher = CryptoJS.AES.decrypt(this.cypher, this.password).toString(CryptoJS.enc.Utf8)
          return cypher
        },
        protect: function() {
          this.getCypher()
          this.getPassword()
          this.setUrl()
        }
      }
      document.getElementById("decrypt").onclick = function(){
        decoder.protect()
      }
</script>
