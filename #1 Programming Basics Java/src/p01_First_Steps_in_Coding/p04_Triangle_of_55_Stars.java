package p01_First_Steps_in_Coding;

import java.util.Collections;

public class p04_Triangle_of_55_Stars {
    public static void main(String[] args) {
        for (int i = 0; i <= 10; i++) {
            System.out.println(String.join("", Collections.nCopies(i, "*")));
        }
    }
}
