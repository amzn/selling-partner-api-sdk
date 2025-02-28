<?php
/**
 * PositionTypeTest
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
use SpApi\Model\aplusContent\v2020_11_01\PositionType;

/**
 * PositionTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The content&#39;s relative positioning.
 * @package     SpApi
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
