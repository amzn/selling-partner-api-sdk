/*
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * OpenAPI spec version: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.apluscontent.v2020_11_01;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import software.amazon.spapi.models.apluscontent.v2020_11_01.StandardImageTextBlock;
import software.amazon.spapi.models.apluscontent.v2020_11_01.TextComponent;
/**
 * The A+ Content standard image and text block, with a related caption. The caption might not display on all devices.
 */
@Schema(description = "The A+ Content standard image and text block, with a related caption. The caption might not display on all devices.")


public class StandardImageTextCaptionBlock {
  @SerializedName("block")
  private StandardImageTextBlock block = null;

  @SerializedName("caption")
  private TextComponent caption = null;

  public StandardImageTextCaptionBlock block(StandardImageTextBlock block) {
    this.block = block;
    return this;
  }

   /**
   * Get block
   * @return block
  **/
  @Schema(description = "")
  public StandardImageTextBlock getBlock() {
    return block;
  }

  public void setBlock(StandardImageTextBlock block) {
    this.block = block;
  }

  public StandardImageTextCaptionBlock caption(TextComponent caption) {
    this.caption = caption;
    return this;
  }

   /**
   * Get caption
   * @return caption
  **/
  @Schema(description = "")
  public TextComponent getCaption() {
    return caption;
  }

  public void setCaption(TextComponent caption) {
    this.caption = caption;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StandardImageTextCaptionBlock standardImageTextCaptionBlock = (StandardImageTextCaptionBlock) o;
    return Objects.equals(this.block, standardImageTextCaptionBlock.block) &&
        Objects.equals(this.caption, standardImageTextCaptionBlock.caption);
  }

  @Override
  public int hashCode() {
    return Objects.hash(block, caption);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StandardImageTextCaptionBlock {\n");
    
    sb.append("    block: ").append(toIndentedString(block)).append("\n");
    sb.append("    caption: ").append(toIndentedString(caption)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
