<?php
/**
 * PositionTypeTest
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
use OpenAPI\Client\Model\aplusContent\PositionType;

/**
 * PositionTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The relative positioning of content.
 * @package     OpenAPI\Client
 */
class PositionTypeTest extends TestCase
{

    private PositionType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PositionType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PositionType"
     */
    public function testPositionType()
    {
        $this->assertInstanceOf(PositionType::class, $this->model);
    }
}
