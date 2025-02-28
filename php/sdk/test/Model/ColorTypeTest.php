<?php
/**
 * ColorTypeTest
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
use SpApi\Model\aplusContent\v2020_11_01\ColorType;

/**
 * ColorTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The relative color scheme of your content.
 * @package     SpApi
 */
class ColorTypeTest extends TestCase
{

    private ColorType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ColorType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ColorType"
     */
    public function testColorType()
    {
        $this->assertInstanceOf(ColorType::class, $this->model);
    }
}
