<?php
/**
 * StackabilityTest
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
use OpenAPI\Client\Model\fulfillmentInbound\Stackability;

/**
 * StackabilityTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates whether pallets will be stacked when carrier arrives for pick-up.
 * @package     OpenAPI\Client
 */
class StackabilityTest extends TestCase
{

    private Stackability $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Stackability();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Stackability"
     */
    public function testStackability()
    {
        $this->assertInstanceOf(Stackability::class, $this->model);
    }
}
