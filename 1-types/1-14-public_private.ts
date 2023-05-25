{
  /**
   * ✨ constructor
   * - 클래스의 필드에 바로 기본값을 할당하면 그 값은 해당 클래스의 모든 인스턴스에 공통으로 적용된다.
   * - 생성자(constructor) 내에서 필드에 기본값을 할당하면, 인스턴스가 생성될 때마다 생성자의 코드가 실행되므로 필드에 새로운 기본값을 할당할 수 있다.
   * - 그리고 생성자는 매개변수를 받을 수 있으므로, 필요에 따라 인스턴스별로 다른 기본값을 할당할 수 있다.

   * ✨ public (생략 가능)
   * - class에서 쓰는 public 키워드가 붙게 되면 모든 자식들이 사용 가능하다.
   * - 하지만, 생략해도 항상 적용 되어 있다.

   * ✨ private
   * - class에서 쓰는 private 키워드가 붙게 되면 자식 요소에서 수정이 불가능 해진다.
   * - 즉, class 내부에서만 수정 및 이용이 가능하다.
   */

  /* ======= public ======= */

  class User {
    public name = "선중";
    constructor(name: string) {
      this.name = name;
    }
  }

  let newUser = new User("미진");
  console.log(newUser);
  newUser.name = "희진";
  console.log(newUser);

  /* ======= private ======= */

  class User2 {
    private name = "선중";
    constructor(name: string) {
      this.name = name;
    }
  }

  let newUser2 = new User2("미진");
  console.log(newUser2);
  /**
   * newUser2.name = "희진";  // name 속성은 private 이며, 'User2' 클래스 내에서만 엑세스 할 수 있습니다.
   * console.log(newUser2)
   */

  /* ======= private 예시 2 ======= */

  class User3 {
    name: string;
    private familyName: string = "김";

    constructor(name: string) {
      this.name = this.familyName + name;
    }

    changeFamilyName(lastName: string) {
      this.familyName = lastName;
    }
  }

  let seonjung = new User3("선중");
  console.log(seonjung);
  /**
   * seonjung.familyName = "박";  // familyName 속성은 private 이며, 'User3' 클래스 내에서만 엑세스 할 수 있습니다.
   * console.log(newUser2)
   */
  seonjung.changeFamilyName("박");
  console.log(seonjung);
}
