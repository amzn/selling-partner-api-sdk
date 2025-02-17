<?php
/**
 * ItemLabelPageTypeTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\fulfillment\inbound\v2024_03_20\ItemLabelPageType;

/**
 * ItemLabelPageTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The page type to use to print the labels. Possible values: &#39;A4_21&#39;, &#39;A4_24&#39;, &#39;A4_24_64x33&#39;, &#39;A4_24_66x35&#39;, &#39;A4_24_70x36&#39;, &#39;A4_24_70x37&#39;, &#39;A4_24i&#39;, &#39;A4_27&#39;, &#39;A4_40_52x29&#39;, &#39;A4_44_48x25&#39;, &#39;Letter_30&#39;.
 * @package     SpApi
 */
class ItemLabelPageTypeTest extends TestCase
{

    private ItemLabelPageType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemLabelPageType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemLabelPageType"
     */
    public function testItemLabelPageType()
    {
        $this->assertInstanceOf(ItemLabelPageType::class, $this->model);
    }
}
