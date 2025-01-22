<?php
/**
 * FulfillmentActionTest
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
use OpenAPI\Client\Model\fulfillment\outbound\FulfillmentAction;

/**
 * FulfillmentActionTest Class Doc Comment
 *
 * @category    Class
 * @description Specifies whether the fulfillment order should ship now or have an order hold put on it.
 * @package     OpenAPI\Client
 */
class FulfillmentActionTest extends TestCase
{

    private FulfillmentAction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentAction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentAction"
     */
    public function testFulfillmentAction()
    {
        $this->assertInstanceOf(FulfillmentAction::class, $this->model);
    }
}
