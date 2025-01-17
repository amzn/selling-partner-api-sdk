<?php
/**
 * HandoverMethodTest
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
use OpenAPI\Client\Model\easyship\HandoverMethod;

/**
 * HandoverMethodTest Class Doc Comment
 *
 * @category    Class
 * @description Identifies the method by which a seller will hand a package over to Amazon Logistics.
 * @package     OpenAPI\Client
 */
class HandoverMethodTest extends TestCase
{

    private HandoverMethod $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new HandoverMethod();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "HandoverMethod"
     */
    public function testHandoverMethod()
    {
        $this->assertInstanceOf(HandoverMethod::class, $this->model);
    }
}
