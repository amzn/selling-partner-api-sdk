<?php
/**
 * LabelOwnerTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\LabelOwner;

/**
 * LabelOwnerTest Class Doc Comment
 *
 * @category    Class
 * @description Specifies who will label the items. Options include &#x60;AMAZON&#x60;, &#x60;SELLER&#x60; or &#x60;NONE&#x60;.
 * @package     OpenAPI\Client
 */
class LabelOwnerTest extends TestCase
{

    private LabelOwner $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelOwner();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelOwner"
     */
    public function testLabelOwner()
    {
        $this->assertInstanceOf(LabelOwner::class, $this->model);
    }
}
