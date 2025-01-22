<?php
/**
 * ColorTypeTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\aplusContent\ColorType;

/**
 * ColorTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The relative color scheme of content.
 * @package     OpenAPI\Client
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
