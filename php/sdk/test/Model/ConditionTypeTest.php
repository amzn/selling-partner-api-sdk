<?php
/**
 * ConditionTypeTest
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
use OpenAPI\Client\Model\pricing\v0\ConditionType;

/**
 * ConditionTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished, Club.
 * @package     OpenAPI\Client
 */
class ConditionTypeTest extends TestCase
{

    private ConditionType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConditionType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConditionType"
     */
    public function testConditionType()
    {
        $this->assertInstanceOf(ConditionType::class, $this->model);
    }
}
