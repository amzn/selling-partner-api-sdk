<?php
/**
 * ConditionTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentInboundV0\Condition;

/**
 * ConditionTest Class Doc Comment
 *
 * @category    Class
 * @description The condition of the item.
 * @package     OpenAPI\Client
 */
class ConditionTest extends TestCase
{

    private Condition $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Condition();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Condition"
     */
    public function testCondition()
    {
        $this->assertInstanceOf(Condition::class, $this->model);
    }
}
