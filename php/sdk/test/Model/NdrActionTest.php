<?php
/**
 * NdrActionTest
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
use SpApi\Model\shipping\v2\NdrAction;

/**
 * NdrActionTest Class Doc Comment
 *
 * @category    Class
 * @description The type of NDR action shipper wants to take for a particular shipment.
 * @package     SpApi
 */
class NdrActionTest extends TestCase
{

    private NdrAction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new NdrAction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "NdrAction"
     */
    public function testNdrAction()
    {
        $this->assertInstanceOf(NdrAction::class, $this->model);
    }
}
